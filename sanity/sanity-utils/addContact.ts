import { apiToken } from "../env";
import { client } from "../lib/client";
import { toast } from "react-hot-toast";

const API_TOKEN = apiToken;

export const addContact = async (contactData: {
  email: string;
  name: string;
  title: string;
  message: string;
}) => {
  try {
    const { email, name, message, title } = contactData;

    const requestData = {
      _type: "contact",
      email,
      name,
      message,
      title,
    };

    const requestHeaders = {
      Authorization: `Bearer ${API_TOKEN}`,
    };

    const response = await client.create(requestData, {
      headers: requestHeaders,
    });

    if (response) {
      toast.success("Thanks for contacting!");
    } else {
      toast.error("Failed to submit. Please try again.");
      console.log(response);
    }
  } catch (error) {
    toast.error("An error occurred. Please try again later.");
    console.log(error);
  }
};
