import React, { useEffect, useState } from "react";

export default function Managedata({
  onCreate,
  onCancel,
  data,
  update = false,
  onUpdate,
}) {
  const [teacher, setTeacher] = useState({});
  const [students, setStudents] = useState([]);
  const [level, setLevel] = useState(0);
  const [unit, setUnit] = useState(0);
  const [lesson, setLesson] = useState(0);
  const [startdate, setStartdate] = useState({});
  const [enddate, setEnddate] = useState({});
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (update) {
      setTeacher(data.teacher);
      setStudents(data.students);
      setLevel(data.students);
      setUnit(data.unit);
      setLesson(data.lesson);
      setStartdate(data.startdate);
      setEnddate(data.enddate);
      setProgress(data.progress);
    } else {
      setTeacher("Jhon Ramirez");
      setStudents(0);
      setLevel("");
      setUnit("");
      setLesson("");
      setStartdate("");
      setEnddate("");
      setProgress("");
    }
  }, [update, data]);

  const onSubmitCallBack = function (e) {
    e.preventDefault();
    if (update) {
      onUpdate({
        teacher,
        students,
        level,
        unit,
        lesson,
        startdate,
        enddate,
        progress,
      });
    } else {
      onCreate({
        teacher,
        students,
        level,
        unit,
        lesson,
        startdate,
        enddate,
        progress,
      });
    }
  };

  return (
    <div>
      <div className="data-form">
        <form onSubmit={onSubmitCallBack}>
          <div>
            <label htmlFor="teacher">
              Teacher
              <select
                id="teacher"
                onChange={(e) => setTeacher(e.target.value)}
                defaultValue={teacher}
              >
                <option value="Manolo">Manolo</option>
                <option value="Marcelo P">Marcelo</option>
                <option value="Daniel C">Daniel</option>
                <option value="Sandra B ">Sandra</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="students">Students</label>
            <input
              placeholder="students"
              type="text"
              name="students"
              id="students"
              value={students}
              onChange={(e) => setStudents(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="level" defaultValue={level}>
              Level
              <select id="level" onChange={(e) => setLevel(e.target.value)}>
                <option value="1">1</option>

                <option value="2">2</option>

                <option value="3">3</option>

                <option value="4">4</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="unit">Unit</label>
            <input
              placeholder="Unit"
              type="text"
              name="unit"
              id="unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lesson">Lesson</label>
            <input
              placeholder="Lesson"
              type="text"
              name="lesson"
              id="lesson"
              value={lesson}
              onChange={(e) => setLesson(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="startdate">Start Date</label>
            <input
              name="startdate"
              id="startdate"
              type="date"
              value={startdate}
              onChange={(e) => {
                setStartdate(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="enddate">End date</label>
            <input
              name="enddate"
              id="enddate"
              type="date"
              value={enddate}
              onChange={(e) => {
                setEnddate(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="progress">Progress</label>
            <input
              placeholder=""
              type="prog"
              name="progress"
              id="progress"
              value={progress}
              onChange={(e) => setProgress(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="add-button">
              {update ? "Update" : "Add"}
            </button>
            {update ? <button onClick={onCancel}>Cancel</button> : null}
          </div>
        </form>
      </div>
    </div>
  );
}
