<template>
  <div>
    <h2>Lista de Productos</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price }}
        <button @click="editProduct(product)">Editar</button>
        <button @click="deleteProduct(product.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await this.$axios.get('/products');
        this.products = response.data;
      } catch (error) {
        console.error('Error al obtener la lista de productos:', error);
      }
    },
    async editProduct(product) {
      this.$router.push(`/editar-producto/${product.id}`);
    },
    async deleteProduct(productId) {
      try {
        await this.$axios.delete(`/products/${productId}`);
      
        this.products = this.products.filter((product) => product.id !== productId);
      } catch (error) {
        console.error('Error al eliminar el producto:', error);
      }
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>