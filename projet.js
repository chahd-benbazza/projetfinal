function acheter() {
    alert("Produit ajouté au panier !");
}
// Fonction pour changer l'image au survol
document.querySelectorAll('.product-img').forEach(function(img) {
    const originalSrc = img.src;
    const hoverSrc = img.getAttribute('data-hover');
    
    img.addEventListener('mouseover', function() {
        img.src = hoverSrc; // Change vers l'image de survol
    });
    
    img.addEventListener('mouseout', function() {
        img.src = originalSrc; // Revient à l'image d'origine
    });
});

// Fonction pour ajouter un produit au panier
function addToCart(productId) {
    const quantity = document.querySelector(`#quantity${productId}`).value;
    alert(`Produit ${productId} ajouté au panier avec quantité : ${quantity}`);
    // Ici, tu peux ajouter le code pour gérer l'ajout du produit au panier via une requête AJAX ou en stockant les données localement.
}