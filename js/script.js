let sizes = [4,8,15,16,23,42];

// let p= d3.selectAll("p");
// p.data(sizes)
//     .style("font-size", function(d,i,array){
//         console.log(d,i,array)
//         return `${sizes[i]}px`
//     });

d3.select("body")
    .append("div")
        .selectAll("p")
        .data(sizes)
        .enter()
        .append("p")
            .text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ex ad ut repudiandae atque animi dolorem obcaecati facilis harum adipisci?")
            .style("font-size", function(d,i,array){
                        return `${sizes[i]}px`
            });
