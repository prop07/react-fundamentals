const data = [
  {
    id: 1,
    user: "Mary Mcdonalid",
    post: "I am happy that i enjoyed my life to the fullest",
    date: "5/7/1945",
    location: "Illam, Nepal",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    user: "Harry Peck",
    post: "Life gets better by change not by chance",
    date: "1/3/1954",
    location: "Lakeshore Rd",
    img: "https://randomuser.me/api/portraits/men/90.jpg",
  },
  {
    id: 3,
    user: "Bobbie Bradley",
    post: "I am happy today to see the sunrise. Thanks to the sunrise.",
    date: "10/4/1994",
    location: "Preston Rd",
    img: "https://randomuser.me/api/portraits/women/71.jpg",
  },
  {
    id: 4,
    user: "Vera Johnson",
    post: "Success doesn't come by waiting, it comes by doing hard works.",
    date: "12/1/1965",
    location: "Green Rd",
    img: "https://randomuser.me/api/portraits/women/91.jpg",
  },
  {
    id: 5,
    user: "Suraj K Thapa",
    post: "वचन को पक्का हुनु तिमि जिन्दगी हासेर बिताउला माया ❤️✨",
    date: "25/07/1999",
    location: "Sydney, NSW",
    img: "https://scontent.fsyd1-1.fna.fbcdn.net/v/t1.6435-9/241025483_183665933867112_6355804482845531467_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=L7woG1dPA8EAX9ETk3b&_nc_ht=scontent.fsyd1-1.fna&oh=d77bc940039bf1a00198d392ce20b8da&oe=6181F38B",
  },
  {
    id: 6,
    user: "Felecia Anderson",
    post: "the day starts with the sunrise and ends with the sunset",
    date: "1/1/1991",
    location: "James St",
    img: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    id: 7,
    user: "Manoj Rijal",
    post: "warning doesn’t matter",
    date: "7/7/1907",
    location: "Kusma, Nepal",
    img: "https://scontent.fsyd1-1.fna.fbcdn.net/v/t1.6435-9/50546872_664377680625907_6077421531779039232_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=k0RjGJIR4pwAX-0Ndo_&_nc_ht=scontent.fsyd1-1.fna&oh=198e031faf178d837008b4adbd5414a7&oe=61850D25",
  },
];

function Index() {
  return (
    <div className="container">
      <Posts />
    </div>
  );
}
// mapping each data list and returning back jsx code.
function Posts() {
  const datas = data.map((dataitem, index, arr) => (
    <Post data={data[index]} key={dataitem.id} />
  ));
  return <div className="grid coloumn">{datas}</div>;
}

function Button() {
  const button = "Add Another";
  return <span className="btn btn-success">{button}</span>;
}
function Like() {
  return (
    <span className="btn btn-success m-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-hand-thumbs-up"
        viewBox="0 0 16 16"
      >
        <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
      </svg>{" "}
      Like
    </span>
  );
}
function Comment() {
  return (
    <span className="btn btn-success m-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-chat-square"
        viewBox="0 0 16 16"
      >
        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
      </svg>{" "}
      Comment
    </span>
  );
}
function Post(props) {
  return (
    <div className="border p-2">
      <img src={props.data.img} alt={props.data.user} className="userimgpost" />
      <span className="postusername container">
        <b>{props.data.user}</b>
      </span>
      <div className="text-fade">{props.data.date}</div>
      <p>{props.data.post}</p>
      <Like />
      <Comment />
    </div>
  );
}

ReactDOM.render(Index(), document.getElementById("root"));
