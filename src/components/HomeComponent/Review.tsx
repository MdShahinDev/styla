import Image from "next/image";
import Container from "../layout/Container";
import user1 from './../../data/user/1.png'
import user2 from './../../data/user/2.png'
import user3 from './../../data/user/3.png'
const Review = () => {
  return (
    <div>
        <Container>
            <div>
                <div className="text-center">
                    <p>Comfortable hoodie with good fabric quality.</p>
                    <Image src={user3} alt="User1"/>
                    <p>Mr. Meckdom Mery</p>
                </div>
            </div>
        </Container>
    </div>
  );
};

export default Review;