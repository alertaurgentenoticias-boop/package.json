export default function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Registro de Marcas - Argentina</h1>
      <p>Protegé tu marca con nuestro servicio.</p>
      <a 
        href="https://wa.me/5491128812287" 
        style={{ 
          backgroundColor: '#25D366', 
          color: 'white', 
          padding: '12px 24px', 
          borderRadius: '8px', 
          textDecoration: 'none',
          marginTop: '20px'
        }}
      >
        Contactar por WhatsApp
      </a>
    </div>
  );
}
