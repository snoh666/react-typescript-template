import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { applyAuthListener } from '@redux/auth/actions';

const InitListeners: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(applyAuthListener());
  }, [dispatch]);

  return null;
};

export default InitListeners;
