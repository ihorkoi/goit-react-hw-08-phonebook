export const selectContacts = store => store.contacts.contacts.items;

export const selectFilterValue = store => store.contacts.filter;

export const selectIsLoading = store => store.contacts.contacts.isLoading;

export const selectError = store => store.contacts.contacts.error;

export const selectIsLoggedIn = store => store.auth.isLoggedIn;

export const selectUser = store => store.auth.user;

export const selectIsRefreshing = store => store.auth.isRefreshing;
