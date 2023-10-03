<template>
    <div>
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <label for="username">Nombre de usuario:</label>
        <input type="text" id="username" v-model="username" required>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required>
        <button type="submit">Iniciar Sesión</button>
      </form>
      <div v-if="loginError" class="error-message">
        Error de inicio de sesión. Verifica tus credenciales.
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        loginError: false,
      };
    },
    methods: {
      async login() {
        try {
          const response = await this.$axios.post('/auth/login', {
            username: this.username,
            password: this.password,
          });
  
          if (response.data.token) {
            localStorage.setItem('token', response.data.token);
           
            this.$router.push('/productos');
          } else {
            this.loginError = true;
          }
        } catch (error) {
          console.error('Error de inicio de sesión:', error);
          this.loginError = true;
        }
      },
    },
  };
  </script>