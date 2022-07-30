import React, { useState, useRef } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const [showData, setShowData] = useState(false);
  const searchRef = useRef();
  const [data, setData] = useState([
    {
      id: 1,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SVYohwunTozWvzUbLnSkJSq3lqpQOb9yJA&usqp=CAU",
      title: "Video Title",
      dec: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
      link: "",
    },
    {
      id: 2,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SVYohwunTozWvzUbLnSkJSq3lqpQOb9yJA&usqp=CAU",
      title: "Video Title",
      dec: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
      link: "",
    },
    {
      id: 3,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SVYohwunTozWvzUbLnSkJSq3lqpQOb9yJA&usqp=CAU",
      title: "Video Title",
      dec: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
      link: "",
    },
    {
      id: 2,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SVYohwunTozWvzUbLnSkJSq3lqpQOb9yJA&usqp=CAU",
      title: "Video Title",
      dec: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
      link: "",
    },
    {
      id: 3,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SVYohwunTozWvzUbLnSkJSq3lqpQOb9yJA&usqp=CAU",
      title: "Video Title",
      dec: "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
      link: "",
    },
  ]);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "#222233",
        color: "#aaccff",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // alert(search)
            console.log(search);
            console.log(searchRef.current);
            // searchRef.current.style.position='absolute';
            searchRef.current.style.top = 0;
            // searchRef.current.style.left=0;
            // searchRef.current.style.right=0;
            searchRef.current.style.transition = "1s";
            setTimeout(() => {
              setShowData(true);
            }, 1000);
          }}
        >
          <div
            ref={searchRef}
            className="row"
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              maxWidth: 400,
              minWidth: 180,
            }}
          >
            <div className="input-field col s12">
              <input
                type="text"
                style={{ color: "#aaccff" }}
                className="validate"
                onChange={(e) => setSearch(e.target.value)}
              />
              <label htmlFor="Search">Search</label>
            </div>
          </div>
        </form>
        <div
          style={{
            marginTop: 120,
            // borderWidth: 1,
            // borderBlockColor: "red",
            // borderStyle: "dashed",
            width: "95vw",
            height: "80vh",
            overflow: "auto",
            // scrollBehavior: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {showData &&
              data.map((i) => {
                return (
                  <div
                    className="card"
                    style={{ maxHeight: 400, maxWidth: 300 }}
                  >
                    <div className="card-image">
                      <img src={i.thumbnail} />
                      <span
                        style={{ color: "#222233", fontWeight: "bold" }}
                        className="card-title"
                      >
                        {i.title}
                      </span>
                    </div>
                    <div
                      style={{ background: "#666699", color: "#aaccff" }}
                      className="card-content"
                    >
                      <p>{i.dec}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
