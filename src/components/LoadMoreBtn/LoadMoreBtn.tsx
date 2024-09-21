import css from './LoadMoreBtn.module.css'

interface LoadMoreBtnProps {
  onClick: () => void;

}
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={css.loardMoreButton}  onClick={onClick} style={{ margin: '20px auto', display: 'block' }}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;