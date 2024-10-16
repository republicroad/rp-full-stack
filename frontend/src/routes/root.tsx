import { useEffect, useState } from "react";
import {
    Outlet,
    Link,
    NavLink,
    useLoaderData,
    Form,
    useNavigation,
    useSubmit
  } from "react-router-dom";
  import { getContacts, createContact } from "../contacts";


export async function action() {
    const contact = await createContact();
    return { contact };
  }

export async function loader({ request }:any) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || "";
  const contacts = await getContacts(q);
  // return{ contacts };
  return { contacts, q };
}
// export async function loader() {
//     const contacts = await getContacts();
//     return { contacts };
//   }

export default function Root() {
    const navigation = useNavigation();
    // const { contacts} : any = useLoaderData();
    const { contacts, q } : any = useLoaderData();
    const submit = useSubmit();

    const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(
      "q"
    );

    useEffect(() => {
      (document.getElementById("q") as HTMLInputElement).value = q;
    }, [q]);

    // const [query, setQuery] = useState(q);
    // useEffect(() => {
    //   setQuery(q);
    // }, [q]);
    console.log("debug:", "fccdjny")
    console.log("contacts:", contacts)
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <Form id="search-form" role="search">
              <input
                id="q"
                className={searching ? "loading" : ""}
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
                defaultValue={q}
                onChange={(event) => {
                  const isFirstSearch = q == null;
                  submit(event.currentTarget.form,
                    {
                      replace: !isFirstSearch,
                    });
                }}
                // value={query}
                // onChange={(e) => {
                //   setQuery(e.target.value);
                // }}
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={!searching}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
          </div>
          <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact: any) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>

                </li>
              ))}
            </ul>
            ) : (
                <p>
                <i>No contacts</i>
                </p>
            )}
          </nav>
        </div>
        <div
          id="detail"
          className={navigation.state === "loading" ? "loading" : ""}>
            <Outlet/>
        </div>
      </>
    );
  }