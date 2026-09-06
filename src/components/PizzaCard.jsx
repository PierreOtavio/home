import { useState } from 'react'

export default function PizzaCard({ nome, descricao, preco, imagens, whatsappNumero }) {
    const [fotoAtiva, setFotoAtiva] = useState(0)

    const linkPedido = `https://wa.me/${whatsappNumero}?text=Ol%C3%A1,%20boa%20noite,%20vim%20pelo%20site%20e%20gostaria%20de%20ver%20o%20card%C3%A1pio%20por%20favor`

    return (
        <div style={styles.card}>
            <div style={{ overflow: 'hidden' }}>
                <img
                    src={imagens[fotoAtiva]}
                    alt={nome}
                    style={styles.imgDestaque}
                />
            </div>

            <div style={styles.miniaturasContainer}>
                {imagens.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Ângulo ${index + 1}`}
                        onClick={() => setFotoAtiva(index)}
                        style={{
                            ...styles.miniatura,
                            border: fotoAtiva === index ? '3px solid #DE462C' : '3px solid transparent',
                            opacity: fotoAtiva === index ? 1 : 0.6
                        }}
                    />
                ))}
            </div>

            <div style={styles.info}>
                <h3 style={styles.nome}>{nome}</h3>
                <p style={styles.descricao}>{descricao}</p>

                <div style={styles.rodapeCard}>
                    <span style={styles.preco}>{preco}</span>
                    <a
                        href={linkPedido}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.btnPedir}
                    >
                        Pedir no WhatsApp
                    </a>
                </div>
            </div>
        </div>
    )
}

const styles = {
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease',
    },
    imgDestaque: {
        width: '100%',
        height: '240px',
        objectFit: 'cover',
    },
    miniaturasContainer: {
        display: 'flex',
        gap: '10px',
        padding: '16px 20px 0',
        justifyContent: 'center',
    },
    miniatura: {
        width: '60px',
        height: '45px',
        borderRadius: '8px',
        objectFit: 'cover',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
    },
    info: {
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    nome: {
        fontSize: '1.3rem',
        fontWeight: '800',
        marginBottom: '8px',
        color: '#1A1A1A',
    },
    descricao: {
        fontSize: '0.95rem',
        color: '#666',
        lineHeight: '1.5',
        flex: 1,
    },
    rodapeCard: {
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '16px',
        borderTop: '1px solid #EEE',
    },
    preco: {
        fontSize: '1.4rem',
        fontWeight: '900',
        color: '#637654', // Verde da logo
    },
    btnPedir: {
        backgroundColor: '#DE462C', // Vermelho da logo
        color: '#FFF',
        textDecoration: 'none',
        padding: '10px 18px',
        borderRadius: '10px',
        fontWeight: '800',
        fontSize: '0.9rem',
        transition: 'opacity 0.2s ease',
    }
}