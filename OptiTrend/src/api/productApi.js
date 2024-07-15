export const fetchProducts = async () => {
  try {
    const response = await fetch(
      "https://timbu-get-all-products.reavdev.workers.dev/?organization_id=4108723323df49b18157b4adb5631ef0&Appid=8N2C3J493DKH2J7&Apikey=b654bdaf159749e9a54345e54485e10c20240712132334365162",
    );
    if (!response.ok) {
       throw new Error(`Failed to fetch products: ${response.status} (${response.statusText})`);
    }
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};
