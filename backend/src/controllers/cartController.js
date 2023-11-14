const { ShoppingCart } = require("../models");

// Function to add a product to cart
exports.addToCart = async (req, res) => {
    try {
        const { user_id, product_id, qty } = req.body;

        // Create a new cart
        const cart = await ShoppingCart.create({
            user_id,
            product_id,
            qty,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        res.status(201).json(cart);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.getCart = async (req, res) => {
    try {
        const { user_id } = req.params;

        // Find all carts by user_id
        const carts = await ShoppingCart.findAll({
            where: { user_id },
            include: ["User", "Product"],
        });

        let total = 0;
        const cartItems = carts.map((cart) => {
            const { cart_id, qty, Product } = cart;
            const { product_name, price } = Product;
            const subtotal = qty * price;
            total += subtotal;
            return {
                cart_id,
                qty,
                product_name,
                price,
                subtotal,
            };
        });

        res.status(200).json({
            cartItems,
            total,
        });
    } catch (err) {
        console.error(err);
    }
};

exports.deleteCart = async (req, res) => {
    try {
        const { user_id } = req.params;

        // Find the cart to delete
        const cart = await ShoppingCart.findOne({
            where: { user_id },
        });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        // Delete the cart
        await cart.destroy();

        res.status(200).json({ message: "Cart deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.updateCart = async (req, res) => {
    try {
        const { user_id } = req.params;
        const { product_id, qty } = req.body;

        // Find the cart to edit
        const cart = await ShoppingCart.findOne({
            where: { user_id, product_id },
        });

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        // Update the cart
        cart.qty = qty;
        await cart.save();

        res.status(200).json(cart);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};


