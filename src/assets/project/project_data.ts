import project1_img from '../../assets/project_1.svg'
import project2_img from '../../assets/project_2.svg'
import project3_img from '../../assets/project_3.svg'
import project4_img from '../../assets/project_4.svg'
import project5_img from '../../assets/project_5.svg'
import project6_img from '../../assets/project_6.svg'

export const project_data = [
  {
    w_no: 1,
    w_name: "Project 1",
    w_img: project1_img,
    w_desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quisquam voluptates, harum aliquid repudiandae quaerat, consequatur atque totam adipisci officiis, deserunt eos. Esse, debitis tenetur possimus corrupti natus beatae quas?",
    w_category: ["React", "JavaScript"],
    w_link: "#"
  },
  {
    w_no: 2,
    w_name: "Project 2",
    w_img: project2_img,
    w_desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quisquam voluptates, harum aliquid repudiandae quaerat, consequatur atque totam adipisci officiis, deserunt eos. Esse, debitis tenetur possimus corrupti n",
    w_category: ["Next", "React"],
    w_link: "#"
  },
  {
    w_no: 3,
    w_name: "Project 3",
    w_img: project3_img,
    w_desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quisquam voluptates, harum aliquid repudiandae quaerat, consequatur atque totam adipisci officiis, deserunt eos. Esse, debitis tenetur possimus corrupti n",
    w_category: ["React"],
    w_link: "#"
  },
  {
    w_no: 4,
    w_name: "Prj 4",
    w_img: project4_img,
    w_desc: "Project description 4",
    w_category: ["Tailwind"],
    w_link: "#"
  },
  {
    w_no: 5,
    w_name: "prj 5",
    w_img: project5_img,
    w_desc: "Project description 5",
    w_category: ["Next"],
    w_link: "#"
  },
  {
    w_no: 6,
    w_name: "prj 6",
    w_img: project6_img,
    w_desc: "Project description 6",
    w_category: ["Laravel"],
    w_link: "#"
  },
];

// const prj_categories = project_data
//   .map(project => project.w_category)
//   .filter((value, index, self) => self.indexOf(value) === index);
const prj_categories = Array.from(new Set(project_data.flatMap(project => project.w_category)))
  .sort();

export { prj_categories };
export default project_data;