import Chats from "../pages/Chats/Chats";
import Contacts from "../pages/Contacts/Contacts.vue";
import Discover from "../pages/Discover/Discover.vue";
import Me from "../pages/Me/Me.vue";
import LogIn from "../pages/LogIn/LogIn.vue";

export default [
  {
    path: "/chats",
    component: Chats,
    meta: {
      showFooterGuide: true
    }
  },
  {
    path: "/contacts",
    component: Contacts,
    meta: {
      showFooterGuide: true
    }
  },
  {
    path: "/discover",
    component: Discover,
    meta: {
      showFooterGuide: true
    }
  },
  {
    path: "/me",
    component: Me,
    meta: {
      showFooterGuide: true
    }
  },
  {
    path: "/login",
    component: LogIn
  },
  {
    path: "/",
    redirect: "/chats"
  }
];
