const data = [
  {
    id: 0,
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/yC-Yzbqy7PY",
    download_url:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 1,
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/LNRyGwIJr5c",
    download_url:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/N7XodRrbzS0",
    download_url:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/Dl6jeyfihLk",
    download_url:
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/y83Je1OC6Wc",
    download_url:
      "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3334,
    url: "https://unsplash.com/photos/LF8gK8-HGSg",
    download_url:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/tAKXap853rY",
    download_url:
      "https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGNvbXB1dGVyfGVufDB8fDB8fHww",
  },
  {
    id: 7,
    author: "Alejandro Escamilla",
    width: 4728,
    height: 3168,
    url: "https://unsplash.com/photos/BbQLHCpVUqA",
    download_url:
      "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNvbXB1dGVyfGVufDB8fDB8fHww",
  },
  {
    id: 8,
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/xII7efH1G6o",
    download_url:
      "https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGNvbXB1dGVyfGVufDB8fDB8fHww",
  },
  {
    id: 9,
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3269,
    url: "https://unsplash.com/photos/ABDTiLqDhJA",
    download_url:
      "https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGNvbXB1dGVyfGVufDB8fDB8fHww",
  },
  {
    id: 10,
    author: "Paul Jarvis",
    width: 2500,
    height: 1667,
    url: "https://unsplash.com/photos/6J--NXulQCs",
    download_url:
      "https://images.unsplash.com/photo-1562408590-e32931084e23?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGNvbXB1dGVyfGVufDB8fDB8fHww",
  },
  {
    id: 11,
    author: "Paul Jarvis",
    width: 2500,
    height: 1667,
    url: "https://unsplash.com/photos/Cm7oKel-X2Q",
    download_url:
      "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNvbXB1dGVyfGVufDB8fDB8fHww",
  },
  {
    id: 12,
    author: "Paul Jarvis",
    width: 2500,
    height: 1667,
    url: "https://unsplash.com/photos/I_9ILwtsl_k",
    download_url:
      "https://plus.unsplash.com/premium_photo-1681666713689-cd1416a652f8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGNvbXB1dGVyfGVufDB8fDB8fHww",
  },
  {
    id: 13,
    author: "Paul Jarvis",
    width: 2500,
    height: 1667,
    url: "https://unsplash.com/photos/3MtiSMdnoCo",
    download_url:
      "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGNvbXB1dGVyfGVufDB8fDB8fHww",
  },
  {
    id: 14,
    author: "Paul Jarvis",
    width: 2500,
    height: 1667,
    url: "https://unsplash.com/photos/IQ1kOQTJrOQ",
    download_url:
      "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGNvbXB1dGVyfGVufDB8fDB8fHww",
  },
];

export default async function fetchData(limit = 5) {
  if (limit > 10) {
    limit = 10;
  }
  const randomNumberArr = createRandomNumbers(limit);
  let randomData = data.filter((item) => randomNumberArr.includes(item.id));
  randomData = randomData.map((item, index) => ({...item, id:index}))
  const randtime = Math.floor(Math.random() * 2000);
  await new Promise((resolve) => setTimeout(resolve, randtime));
  return randomData;
}

function createRandomNumbers(count: number) {
  const randomNumbers = new Set();

  while (randomNumbers.size < count) {
    const randNum = Math.floor(Math.random() * data.length);
    randomNumbers.add(randNum);
  }

  return [...randomNumbers];
}
