import styles from './BottonNavigation.module.scss';

const tabs = [
    {
        _id: 1,
        name: 'Overview',
    },
    {
        _id: 2,
        name: 'Episodes',
    }
]

const BottonNavigation = ({ activeTab, setActiveTab }) => {
    return (
        <nav className={styles.nav}>
            {tabs.map(tab => (
                <button
                    key={tab._id}
                    onClick={() => setActiveTab(tab._id)}
                    className={activeTab === tab._id ? styles.active : ''}>
                    {tab.name}
                </button>
            ))}
        </nav>
    );
};

export { BottonNavigation }