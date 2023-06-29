import React, { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { Pagination } from '@mantine/core';
import { AuthContext } from '../../Context/Auth';

function List({ list, toggleComplete }) {
  const { displayCount, showComplete, sort } = useContext(SettingsContext);
  const { isLoggedIn, authorize } = useContext(AuthContext);
  const [activePage, setPage] = useState(1);

  const renderableList = showComplete ? list : list.filter(item => !item.complete);
  const pageCount = Math.ceil(renderableList.length / displayCount);
  const listStart = displayCount * (activePage - 1);
  const listEnd = listStart + displayCount;
  const displayList = renderableList.slice(listStart, listEnd);

  return (
    <div>
      {isLoggedIn && authorize('viewList') ? (
        <>
          {displayList.map(item => (
            <div key={item.id}>
              <p>{item.text}</p>
              <p><small>Assigned to: {item.assignee}</small></p>
              <p><small>Difficulty: {item.difficulty}</small></p>
              <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
              <hr />
            </div>
          ))}
          <Pagination value={activePage} onChange={setPage} total={pageCount} />
        </>
      ) : (
        <p>You are not authorized to view the list.</p>
      )}
    </div>
  );
}

export default List;
