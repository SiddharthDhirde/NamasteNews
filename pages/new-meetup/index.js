// our-domain.com/new-meetup
// import Layout from "../../components/layout/Layout";
import Head from "next/head";
import { Fragment } from "react";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add New News</title>
        <meta
          name="description"
          content="Add your own News to let the World know!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />{" "}
    </Fragment>
  );
}

export default NewMeetupPage;
