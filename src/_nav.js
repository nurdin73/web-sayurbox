export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    // {
    //   title: true,
    //   name: 'Theme',
    //   wrapper: {            // optional wrapper object
    //     element: '',        // required valid HTML5 element tag
    //     attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
    //   },
    //   class: ''             // optional class names space delimited list for title item ex: "text-center"
    // },
    {
      name: 'Master',
      url: '/master',
      icon: 'icon-layers',
      children: [
        {
          name: 'Product',
          url: '/master/product',
          icon: 'icon-basket-loaded'
        },
        {
          name: 'Discount',
          url: '/master/discount',
          icon: 'cui-tags',
        },
      ]
    },
    {
      name: 'Transaction',
      url: '/transaction',
      icon: 'cui-cart',
    },
    {
      name: 'Member',
      url: '/member',
      icon: 'icon-people',
      children: [
        {
          name: 'Pembeli',
          url: '/member/pembeli',
          icon: 'icon-handbag'
        },
        {
          name: 'Penjual',
          url: '/member/penjual',
          icon: 'icon-basket',
        },
      ]
    },
    {
      name: 'Reports',
      url: '/report',
      icon: 'icon-printer',
    },
    {
      name: 'Archive',
      url: '/archive',
      icon: 'fa fa-archive',
      children: [
        {
          name: 'Product',
          url: '/archive/product',
          icon: 'icon-basket-loaded'
        },
        {
          name: 'Member',
          url: '/archive/member',
          icon: 'cui-user',
        },
      ]
    },
    {
      name: 'My Profile',
      url: '/profile',
      icon: 'icon-user',
    }
  ],
};
