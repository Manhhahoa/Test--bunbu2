
const OneStudy = () => {
  interface Study {
    img: string;
    nameStudy: string;
  }
  const ListStudy: Array<Study> = [
    {
      img: 'https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png',
      nameStudy: 'khóa học 1'
    },
    {
      img: 'https://files.fullstack.edu.vn/f8-prod/courses/4/61a9e9e701506.png',
      nameStudy: 'khóa học 2'
    }
  ]
  return (
    <>
      {
        ListStudy.map(study => {
          return <div>
            <div className="d-flex onestudy">
              <img className="m-right-8" src={study.img} alt="" />
              <p className="fz-low9"> {study.nameStudy}</p>
            </div>
          </div>
        })
      }
    </>
  )
}

export default OneStudy