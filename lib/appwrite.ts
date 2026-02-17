//configuration file for connecting the backend(appwrite)
//credentials
import { Client } from "react-native-appwrite";
const client = new Client()
  .setEndpoint("https://nyc.cloud.appwrite.io/v1")
  .setProject("6993ea4b00082418d702")
  .setPlatform("co.anandhu.habit-tracker");
