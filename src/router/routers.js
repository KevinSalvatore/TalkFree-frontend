import Chats from "../pages/Chats/Chats";
import Contacts from "../pages/Contacts/Contacts.vue";
import Discover from "../pages/Discover/Discover.vue";
import Me from "../pages/Me/Me.vue";

export default [
  {
    path: "/chats",
    component: Chats
  },
  {
    path: "/contacts",
    component: Contacts
  },
  {
    path: "/discover",
    component: Discover
  },
  {
    path: "/me",
    component: Me
  },
  {
    path: "/",
    redirect: "/chats"
  }
];
