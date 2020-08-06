import { v4 as uuidv4 } from 'uuid';
import slugify from 'slugify'; 

export const DEFAULT_POSTS = [
    {
      id: uuidv4(), 
      title: 'What is Lorem Ipsum?',
      slug: slugify('What is Lorem Ipsum?', {
        replacement: '-',
        remove: undefined,
        lower: true 
      }),
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, 
      date: new Date()
    },
    {
      id: uuidv4(), 
      title: 'Where does it come from?',
      slug: slugify('Where does it come from?', {
        replacement: '-',
        remove: undefined,
        lower: true 
      }),
      content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32`, 
      date: new Date()
    },
    {
      id: uuidv4(), 
      title: 'Why do we use it?',
      slug: slugify('Why do we use it?', {
        replacement: '-',
        remove: undefined,
        lower: true 
      }),
      content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`, 
      date: new Date()
    },
    {
      id: uuidv4(), 
      title: 'Where can I get some?',
      slug: slugify('Where can I get some?', {
        replacement: '-',
        remove: undefined,
        lower: true 
      }),
      content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`, 
      date: new Date()
    },
    {
      id: uuidv4(), 
      title: 'Lorem Ipsum',
      slug: slugify('Lorem Ipsum', {
        replacement: '-',
        remove: undefined,
        lower: true 
      }),
      content: `"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."`, 
      date: new Date()
    }
]