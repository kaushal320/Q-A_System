import * as sdk from "node-appwrite";
import env from "@/app/env";
const client = new sdk.Client()
  .setEndpoint(env.appwrite.endpoint)
  .setProject(env.appwrite.projectId)
  .setSession(env.appwrite.apiKey);

const databases = new sdk.Databases(client);
const avatars = new sdk.Avatars(client);
const storage = new sdk.Storage(client);
const account = new sdk.Account(client);

export { client, databases, avatars, storage, account };
