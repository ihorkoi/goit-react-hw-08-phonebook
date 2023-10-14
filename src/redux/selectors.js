export const selectContacts = store => store.contacts.items;

export const selectFilterValue = store => store.filter;

export const selectIsLoading = store => store.contacts.isLoading;

export const selectError = store => store.contacts.error;
