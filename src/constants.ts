export const RESTAURANT_INFO = {
  name: "Swiss Palace",
  slogan: "L'élégance culinaire au cœur de Dakar",
  address: "Avenue Birago Diop, Point E, Dakar",
  phone: "+221 78 794 27 29",
  phoneRaw: "221787942729",
  hours: "Ouvert tous les jours : 07h30 - 04h00",
  whatsapp: "https://wa.me/221787942729",
  email: "contact@ahamedhassani.com",
  location: {
    lat: 14.6937,
    lng: -17.4589, // Approximate for Point E
  }
};

export const MENU_CATEGORIES = [
  {
    id: "lebanese",
    name: "Spécialités Libanaises",
    items: [
      { 
        name: "Mezzé Royal", 
        price: "12.000 FCFA", 
        description: "Assortiment de houmous, moutabal, taboulé et falafels.",
        image: "/images/ima_nour6.jpg"
      },
      { 
        name: "Chawarma Poulet", 
        price: "4.500 FCFA", 
        description: "Poulet mariné, crème d'ail, frites et cornichons.",
        image: "/images/ima_nour1.jpg"
      },
      { 
        name: "Kafta Grillée", 
        price: "7.000 FCFA", 
        description: "Viande hachée épicée, persil et oignons.",
        image: "/images/ima_nour3.jpg"
      },
      { 
        name: "Falafels Maison", 
        price: "3.500 FCFA", 
        description: "Boulettes de pois chiches frites, herbes fraîches et sauce tarator.",
        image: "/images/ima_nour5.jpg"
      },
      { 
        name: "Houmous Beyrouthi", 
        price: "4.000 FCFA", 
        description: "Purée de pois chiches, ail, persil et piment.",
        image: "/images/ima_nour1.jpg"
      },
      { 
        name: "Taboulé Vert", 
        price: "4.500 FCFA", 
        description: "Persil, menthe, tomates, oignons et citron.",
        image: "/images/ima_nour2.jpg"
      }
    ]
  },
  {
    id: "burgers",
    name: "Burgers Gourmet",
    items: [
      { 
        name: "Swiss Palace Burger", 
        price: "6.500 FCFA", 
        description: "Double steak, fromage suisse, oignons caramélisés et sauce secrète.",
        image: "/images/ima_nour2.jpg"
      },
      { 
        name: "Chicken Crispy", 
        price: "5.500 FCFA", 
        description: "Poulet pané croustillant, salade, tomate et sauce tartare.",
        image: "/images/ima_nour3.jpg"
      },
      { 
        name: "Le Montagnard", 
        price: "7.500 FCFA", 
        description: "Steak haché, raclette, bacon de bœuf et sauce forestière.",
        image: "/images/ima_nour4.jpg"
      },
      { 
        name: "Veggie Deluxe", 
        price: "6.000 FCFA", 
        description: "Galette de légumes, avocat, halloumi grillé et pesto.",
        image: "https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&q=80&w=600"
      },
      { 
        name: "Smoky BBQ", 
        price: "7.000 FCFA", 
        description: "Steak grillé, cheddar fumé, oignons frits et sauce BBQ.",
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=600"
      },
      { 
        name: "Fish Burger", 
        price: "5.500 FCFA", 
        description: "Filet de poisson pané, sauce tartare et salade croquante.",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&q=80&w=600"
      }
    ]
  },
  {
    id: "grills",
    name: "Grillades & Poissons",
    items: [
      { 
        name: "Filet de Capitaine", 
        price: "9.500 FCFA", 
        description: "Poisson frais grillé servi avec riz ou frites.",
        image: "/images/2.jpg"
      },
      { 
        name: "Côtelettes d'Agneau", 
        price: "11.000 FCFA", 
        description: "Grillées au feu de bois avec herbes de Provence.",
        image: "/images/ima_nour7.jpg"
      },
      { 
        name: "Mix Grill Palace", 
        price: "15.000 FCFA", 
        description: "Assortiment de brochettes de bœuf, poulet et kafta.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=600"
      },
      { 
        name: "Gambas Grillées", 
        price: "14.000 FCFA", 
        description: "Gambas marinées au citron et à l'ail, grillées à la perfection.",
        image: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&q=80&w=600"
      },
      { 
        name: "Brochettes de Bœuf", 
        price: "8.500 FCFA", 
        description: "Morceaux de bœuf tendres marinés et grillés.",
        image: "/images/3.jpg"
      },
      { 
        name: "Poulet Braisé", 
        price: "7.500 FCFA", 
        description: "Demi-poulet braisé à l'ivoirienne avec alloco ou riz.",
        image: "/images/3.jpg"
      }
    ]
  },
  {
    id: "chicha",
    name: "Espace Chicha",
    items: [
      { 
        name: "Chicha Classique", 
        price: "5.000 FCFA", 
        description: "Menthe, Pomme, Raisin, Myrtille.",
        image: "/images/chicha2.jpg"
      },
      { 
        name: "Chicha Premium", 
        price: "8.000 FCFA", 
        description: "Mélanges spéciaux Swiss Palace.",
        image: "/images/chicha3.jpg"
      }     
    ]
  }
];
