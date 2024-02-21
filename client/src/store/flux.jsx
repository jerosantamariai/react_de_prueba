const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            variablePrueba: null,
            etnias: null,
        },
        actions: {
            // ! BASE DE PETICIONES
            // ? GET --> Método se debe llamar tal como se puso en appContext
            // ? getSome: url => {
            // ?     fetch(url, {
            // ?         method: 'GET',
            // ?         headers: {
            // ?             'Content-Type': 'application/json'
            // ?         }
            // ?     })
            // ?         .then(resp => resp.json())
            // ?         .then(data => {
            // ?             setStore({
            // ?                 variable: data
            // ?             })
            // ?         })
            // ?         .catch(error => {
            // ?             console.log(error)
            // ?         })
            // ? },
            // ! ---------------
            // * POST
            // postSome: (e, history) => {
            //     e.preventDefault();
            //     const store = getStore();

            //     fetch(store.path + '/register', {
            //         method: 'POST',
            //         body: JSON.stringify({
            //             email: store.email,
            //             password: store.password
            //         }),
            //         headers: {
            //             'Content-Type': 'application/json'
            //         }
            //     })
            //         .then(resp => resp.json())
            //         .then(data => {
            //             console.log(data)
            //             if (data.msg) {
            //                 const action = getActions()
            //                 action.getUsers(store.path + "/users/");
            //                 setStore({
            //                     errors: data
            //                 })
            //             } else {
            //                 setStore({
            //                     blog: data,
            //                     currentUser: data,
            //                     isAuth: true,
            //                     email: '',
            //                     password: '',
            //                     errors: null
            //                 })
            //                 sessionStorage.setItem('currentUser', JSON.stringify(data))
            //                 sessionStorage.setItem('isAuth', true)
            //                 history.push("/dashboard");
            //             }
            //         })
            // },

            // ! FUNCIONALIDADES GLOBALES
            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            },

            getPrueba: url => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            variablePrueba: data
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            
            getEtnias: url => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            etnias: data
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            
        },
    }
}

export default getState;