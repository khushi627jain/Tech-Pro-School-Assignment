import { CheckCircleIcon } from '@chakra-ui/icons'
import {  Box, Image, Text} from '@chakra-ui/react'
import React from 'react'


const CourseCard = ({ textColor, themeColor, Color }) => {

    let arr = [

        {
            title: "Frontend Development",
            day: 25,
            image: "https://img.freepik.com/free-vector/frontend-developer-typographic-header-website-interface-design-improvement-web-page-programming-coding-testing-it-profession-isolated-flat-vector-illustration_613284-304.jpg?w=1060&t=st=1701108454~exp=1701109054~hmac=bfaab634320cacd361e30c162803263fd5e861f8b5085bfc08f161652a06f55b",
            price: 200000,
        },
        {
            title: "Full Stack Web Development",
            day: 35,
            image: "https://img.freepik.com/premium-vector/full-stack-developer-working-computer-it-professional-programmer-coding-website-creation-proccess-computer-technology_277904-5495.jpg?size=626&ext=jpg",
            price: 250000,
        },
        {
            title: "Backend Development",
            day: 25,
            image: "https://img.freepik.com/free-vector/back-end-developer-typographic-header-software-development-process-website-interface-design-improvement-programming-coding-it-profession-isolated-flat-vector-illustration_613284-521.jpg?w=1380&t=st=1701108518~exp=1701109118~hmac=c8fd7b94963c344c7f4344d68a7cf798e71cb3df19f8a73feec518ee7a325464",
            price: 200000,
        },
        {
            title: "Data Analytics",
            day: 25,
            image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/data_07ee77a2da.png",
            price: 150000,
        },
        {
            title: "Mobile Development",
            day: 30,
            image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/mobile_ab8f5bdbf6.png",
            price: 250000,
        },
        {
            title: "Software Testing & Automation",
            day: 25,
            image: "https://masai-website-images.s3.ap-south-1.amazonaws.com/testing_faf38ba965.png",
            price: 200000,
        },

    ]


    return (


        <Box mt="60px" p="2vw" gap={"25px"} display="grid" gridTemplateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(2,1fr)", "repeat(2,1fr)", "repeat(3,1fr)"]}>
            {
                arr.map((ele, idx) => {
                    return (
                        <Box
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top-center"
                            bg={themeColor} borderRadius={"0 50px 0 50px"} h={"fit-content"} p="1vw"
                            boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px">
                            <Image borderRadius={"0 50px 0 50px"} id={ele.id} m="auto" h={["300px", "250px", "280px"]} src={ele.image} />
                            <Box borderBottom={`1px solid lightgray`} m="8px 0" ></Box>
                            <Text whiteSpace={"nowrap"} fontSize={{ base: '2xl', md: '3xl' }} color={textColor} m={"6px 0"} fontWeight={600}>{ele.title}</Text>
                            <Text color={"#676667"}>Upskill your career in just {ele.day} weeks</Text>
                            <Box borderBottom={`1px solid lightgray`} m="8px 0" ></Box>
                            <Box color={textColor} display={"flex"} gap={"15px"} alignItems={"center"}><CheckCircleIcon color={Color} /><Text fontWeight={500}>Experienced Instructors</Text></Box>
                            <Box color={textColor} display={"flex"} gap={"15px"} alignItems={"center"}><CheckCircleIcon color={Color} /><Text fontWeight={500}>Pay After Placement</Text></Box>
                            <Box color={textColor} display={"flex"} gap={"15px"} alignItems={"center"}><CheckCircleIcon color={Color} /><Text fontWeight={500}>Price : {ele.price} ₹</Text></Box>
                            <button style={{
                                display: "flex",
                                borderRadius: "0 10px 0 10px",
                                padding: "10px 40px",
                                margin: "20px auto 0",
                                backgroundColor: Color,
                                color: themeColor
                            }} onmouseover="this.style.backgroundColor='#yourTextColor'; this.style.color='#yourColor';" onmouseout="this.style.backgroundColor='#yourColor'; this.style.color='#yourThemeColor';">Enroll Now</button>


                        </Box>
                    )
                })
            }
        </Box>


    )
}

export default CourseCard
