const TopImage = ({ image = "" }) => {
    return (
        <div style={{
            backgroundImage: `url(${image})`,
            height: '250px',
            width: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'top-center',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
        }} />
    );
};

export { TopImage }
