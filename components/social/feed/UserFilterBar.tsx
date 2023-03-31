import Image from 'next/image';

const UserFilterBar = () => {
  return (
    <div>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i}>
          <Image
            width={92}
            height={92}
            src=""
            alt=""
            style={{ background: 'gray' }}
          />
          <span>nickname</span>
        </div>
      ))}
    </div>
  );
};

export default UserFilterBar;
