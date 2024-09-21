import css from './LoadMoreBtn.module.css'
const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={css.loardMoreButton}  onClick={onClick} style={{ margin: '20px auto', display: 'block' }}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;