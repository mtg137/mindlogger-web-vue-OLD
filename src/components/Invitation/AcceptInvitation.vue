<template>
  <div class="mt-3 pt-3 container">
    <div v-if="isLoggedIn">
      <div v-if="status === 'loading'" class="heading">
        <h1>
          {{ $t("loadingInvitation") }}
        </h1>
      </div>
      <div v-else-if="status === 'error'">
        {{ $t("networkError") }}
        <router-link to="/profile">
          {{ $t("home") }}
        </router-link>
      </div>
      <h1 v-else-if="status === 'accepted'">
        {{ $t("invitationAccepted") }}
      </h1>
      <BounceLoader v-else />
    </div>
    <div v-else class="heading">
      {{ $t("please") }}
      <router-link to="/login">
        {{ $t("login") }}
      </router-link>
      {{ $t("or") }}
      <router-link to="/signup">
        {{ $t("signup") }}
      </router-link>
      to accept this invitation!
    </div>
  </div>
</template>

<style>
.invitationBody * {
  text-align: left;
  font-size: 16px;
}

.invitationBody {
  text-align: left;
}
</style>

<script>
import api from '../../lib/api/';
import BounceLoader from '../BounceLoader';
import ButtonGroup from './ButtonGroup';

export default {
  name: 'AcceptInvitation',
  props: {
    user: {
      type: Object,
    },
    isLoggedIn: {
      type: Boolean,
    },
    apiHost: {
      type: String,
    },
  },
  components: {
    ButtonGroup,
    BounceLoader,
  },
  data() {
    return {
      status: 'loading',
      invitationText: '',
    };
  },
  watch: {
    isLoggedIn() {
      if (this.isLoggedIn) {
        this.acceptInvitation();
      }
    },
  },
  mounted() {
    if (this.isLoggedIn) {
      this.acceptInvitation();
    } else {
      const route = `invitation/${this.$route.params.invitationId}/accept`;
      this.$store.commit('setRedirect', route);
    }
  },
  methods: {
    acceptInvitation() {
      this.status = 'loading';
      api
        .acceptInvitation({
          apiHost: this.apiHost,
          email: this.$store.state.userEmail,
          token: this.user.authToken.token,
          invitationId: this.$route.params.invitationId,
        })
        .then(() => {
          this.status = 'accepted';
        })
        .catch(() => {
          this.status = 'error';
        });
    },
  },
};
</script>
