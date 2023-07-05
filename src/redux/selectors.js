export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectContactsCount = state => {
  const contacts = selectContacts(state);
  return contacts.length;
};
