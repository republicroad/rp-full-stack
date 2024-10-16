// https://stackoverflow.com/a/50516783
// https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam
// https://medium.com/@eladk/moving-from-javascript-to-typescript-lifehacks-e29d7e1aa3e0

// declare module "contacts" {
//     export async function getContacts(query: any): string[];
// }

declare module '*';
// declare module  'contacts';