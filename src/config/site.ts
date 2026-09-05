export const siteConfig = {
  contact: {
    whatsapp: "5531998647703",
    whatsappMessage: "Olá! Gostaria de fazer um orçamento para a minha empresa.",
    email: "contatocrono@gmail.com",
    phone: "(31) 99864-7703",
    instagram: "@agenciacrono",
  },
  links: {
    portfolioExternal: "https://youtube.com",
  },
};

export const getWhatsAppLink = () => {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage
  )}`;
};
