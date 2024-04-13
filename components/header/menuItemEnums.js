export const MenuItemKeys = Object.freeze({
    BUY: 1,
    RENT: 2,
    SELL: 3,
    OFF_PLAN: 4,
    axBlog: 5,
    news: 6,
    podcasts: 7,
    CATALOGS: 8,
    AGENTS: 9,
    WHO_WE_ARE: 10
  });
  
  export const menuItems = [
    {
      label: 'Home',
      key: MenuItemKeys.HOME,
      href: "/"
    },
    {
      label: 'Buy',
      key: MenuItemKeys.BUY,
      href: "/products/buy"
    },
    {
      label: 'Rent',
      key: MenuItemKeys.RENT,
      href: "/Rent"
    },
    {
      label: 'Sell',
      key: MenuItemKeys.SELL,
      href: "/Sell"
    },
    {
      label: 'Off-Plan',
      key: MenuItemKeys.OFF_PLAN,
      href: "/off-plan"
    },
    {
        label: 'Blogs',
        key: MenuItemKeys.axBlog,
        href: "/Blog"
        // subItems: [
        //     {
        //       label: 'News',
        //       key: MenuItemKeys.news,
        //     },
        //     {
        //       label: 'Podcasts',
        //       key: MenuItemKeys.podcasts,
        //     },
        //   ],
    },
    {
        label: 'Catalogs',
        key: MenuItemKeys.CATALOGS,
        href: "/Catalog"
    },
    {
        label: 'Officials',
        key: MenuItemKeys.AGENTS,
        href: "/OFFICIALS"
    },
    {
        label: 'Company Profile',
        key: MenuItemKeys.WHO_WE_ARE,
        href: "/Company-profile"
    }
  ]