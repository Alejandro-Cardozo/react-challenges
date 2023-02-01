const Comment = ({ data }) => {
  const { userName, comment, date } = data;

  return (
    <div>
      <h3>
        {userName} <span style={{ fontSize: '.8rem', color: 'DarkSlateGray', fontWeight: 200 }}>{date}</span>
      </h3>
      <p>{comment}</p>
    </div>
  );
};

export default Comment;
