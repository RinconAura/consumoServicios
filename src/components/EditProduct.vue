<template>
  <div>
    <h2>Editar Producto</h2>
    <form @submit.prevent="updateProduct">
      <div>
        <label for="title">Título:</label>
        <input type="text" id="title" v-model="productData.title" required>
      </div>
      <div>
        <label for="description">Descripción:</label>
        <textarea id="description" v-model="productData.description" required></textarea>
      </div>
      <div>
        <label for="price">Precio:</label>
        <input type="number" id="price" v-model="productData.price" required>
      </div>
      <!-- Agrega otros campos de edición aquí según la estructura de tu producto -->
      <button type="submit">Guardar Cambios</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productData: {},
    };
  },
  created() {
    // Obtén el ID del producto de las propiedades de ruta
    const productId = this.$route.params.id;

    // Realiza una solicitud para obtener los datos del producto a editar
    this.fetchProductData(productId);
  },
  methods: {
    async fetchProductData(productId) {
      try {
        const response = await this.$axios.get(`/products/${productId}`);
        this.productData = response.data;
      } catch (error) {
        console.error('Error al obtener los datos del producto:', error);
      }
    },
    async updateProduct() {
      try {
        // Realiza una solicitud PUT o PATCH para actualizar el producto
        await this.$axios.put(`/products/${this.productData.id}`, this.productData);
        // Redirige al usuario a la página de lista de productos después de la edición
        this.$router.push('/productos');
      } catch (error) {
        console.error('Error al actualizar el producto:', error);
      }
    },
  },
};
</script>