import React from 'react';
import PropTypes from 'prop-types';
import MiniLoadingCircle from '../mini-loading-circle/MiniLoadingCircle';

const Loading = () => {
  return (
    <div className="absolute left-[50%] top-[50%] flex h-full w-full translate-x-[-50%] translate-y-[-50%] transform items-center justify-center bg-white">
      <div className="flex items-center gap-3">
        <MiniLoadingCircle />
        Loading...
      </div>
    </div>
  );
};

export default Loading;
