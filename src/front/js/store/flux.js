const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      isLogin: false,
      message: null,
      cartList: [],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      user: {
        name: "Manuel",
        email: "mangobo@freenet.de",
      },

      BACKEND_URL:
        "https://3001-goldammer20-miamielectr-hxj6kt5ulk3.ws-eu79.gitpod.io", //This backend URL needs to be changed each time the repository is loaded from Github. Go to Port 3001 and take the new backend url from there
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      logoutFunction: () => {
        setStore({ isLogin: false });
      },
      loginFunction: () => {
        setStore({ isLogin: true });
      },
      updateCart: (data) => {
        let savingDate = getStore().cartList;

        let newCart = [...savingDate, data];
        console.log(newCart);
        setStore({ cartList: newCart });
        //console.log(cartList);
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
