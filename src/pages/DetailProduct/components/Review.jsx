import MyButton from '@components/Button/Button';
import FormInput from '@/pages/DetailProduct/components/FormInput';
import styles from '../styles.module.scss';

const ReviewProduct = () => {
  const {
    reviews,
    containerReview,
    noreview,
    replyForm,
    commentReplyTitle,
    commentNotes,
    checkConfirm,
    btnSubmit,
  } = styles;
  return (
    <div className={containerReview}>
      <div className={reviews}>REVIEWS</div>
      <div className={noreview}>There are no reviews yet.</div>

      <div className={replyForm}>
        <div className={commentReplyTitle}>
          BE THE FIRST TO REVIEW "10K YELLOW GOLD"
        </div>
        <p className={commentNotes}>
          Your email address will not be published. Required fields are marked
        </p>

        <form>
          {/* RATING */}

          <FormInput label={'Your rating'} isRequired typeChildren='rating' />

          {/* AREA */}
          <FormInput label={'Your review'} isRequired typeChildren='textarea' />

          {/* Name */}
          <FormInput label={'Name'} isRequired typeChildren='input' />

          {/* Email */}
          <FormInput label={'Email'} isRequired typeChildren='input' />

          <div className={checkConfirm}>
            <input type='checkbox' />
            <span>
              Save my name, email, and website in this browser for the next time
              I comment.
            </span>
          </div>
          <div className={btnSubmit}>
            <MyButton content={'SUBMIT'} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewProduct;
