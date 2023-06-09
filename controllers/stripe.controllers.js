const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET);

router.post('/crear-sesion-pago', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [

            {
                price: 'price_1NF04QIYMW6vfRerQC1fQIy1',
                quantity: 1,

            },
        ],
        mode: 'payment',
        success_url: 'https://cinemxperience.netlify.app/', // URL de la página a la que se redirigirá después de un pago exitoso
        cancel_url: 'https://cinemxperience.netlify.app/', // URL de la página a la que se redirigirá si el usuario cancela el pago
    });

    res.json({ sessionId: session.id });
});


module.exports = router
