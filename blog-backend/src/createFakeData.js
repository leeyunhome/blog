import Post from './models/post';

export default function createFakeData() {
    // 0, 1, ... 39로 이루어진 배열을 생성한 후 포스트 데이터로 변환
    const posts = [...Array(40).keys()].map(i => ({
        title: `포스트 #${i}`,
        // 200자 이상의 텍스트
        body:
            'It started before I was born. My biological mother was a young, unwed college graduate student, and she decided to put me up for adoption. She felt very strongly that I should be adopted by college graduates, so everything was all set for me to be adopted at birth by a lawyer and his wife. Except that when I popped out they decided at the last minute that they really wanted a girl. So my parents, who were on a waiting list, got a call in the middle of the night asking: "We have an unexpected baby boy; do you want him?" They said: "Of course." My biological mother later found out that my mother had never graduated from college and that my father had never graduated from high school. She refused to sign the final adoption papers. She only relented a few months later when my parents promised that I would someday go to college.',
        tags: ['가짜', '데이터'],

    }));
    Post.insertMany(posts, (err, docs) => {
        console.log(docs);
    });
}