import WorkoutPicker from '../Components/WorkoutPicker';
import Hero from '../Components/Hero';

const Home = props => {
  return (
    <>
      {/* <PageHeader title='The Dumbbell Workout Plan To Build Muscle At Home' subtitle='Add size to your arms, chest and shoulders with these four dumbbell workouts' /> */}
      <Hero
        src='https://workout-cal.s3.us-east-2.amazonaws.com/dumbbells.jpeg'
        placeholderSrc=''
        title='The Dumbbell Workout Plan To Build Muscle At Home'
        subtitle='Add size to your arms, chest and shoulders with these four dumbbell workouts'
      >
        <WorkoutPicker />
      </Hero>
      <div style={{margin: 'auto', maxWidth: '750px'}}>
        {/* <ProgressiveImage src='https://workout-cal.s3.us-east-2.amazonaws.com/dumbbells.jpeg' placeholderSrc='' /> */}
        <p>Give a man a pair of dumbbells, and he can crank out a few sets of curls and bulk up his biceps. But give a man a pair of dumbbells and a plan, and he can change his entire body in a month.</p>
        <p>When it comes to the dumbbells, all we can offer is assistance in picking out the best set possible – our comprehensive round-up of the best dumbbells available caters to all budgets and has options for all types of dumbbells, although our top recommendation is a pair of DKN dumbbells with rubber hexagonal ends. When it comes to the plan, however, we can offer a lot more.</p>
        <p>This four-week, four-workouts-a-week training plan is guaranteed to get results if you follow it to the letter. And we really do mean to the letter, because the plan goes into great detail on not only the exercises, sets and reps you should do, but also the tempo at which you should work to ensure you maximise your results.</p>
        <p>The workouts in the plan are made up of supersets, where you do pairs of exercises back to back to keep your muscles under tension for as long as possible. This is one of the most effective ways to use dumbbells in your training, helping to strip away fat as well as building lean muscle. Supersets are a tough way to train, but one month from now, when you’re sporting a broader chest, bulging biceps, titanic triceps and a set of abs that will make your washing machine redundant, it will all have been worth it.</p>
        <p>Once you’ve selected your weights, check out the guide below, which explains how to follow this training plan and how it has been structured to be as effective as possible, then get ready to take on the plan itself.</p>
        <h2>How The Plan Works</h2>
        <p>Here’s the theory behind your four-week muscle plan</p>
        <h3>1. Body part splits</h3>
        <p>This four-week plan includes four workouts a week. Each of the four hits a different body part. Workout 1 each week targets your chest and back; workout 2 your arms (biceps and triceps); workout 3 your legs and abs; and workout 4 your shoulders.</p>
        <p>The body-part workouts have been selected to help you add muscle mass and transform your torso as quickly as possible.</p>
        <p>The first three workouts each week hit two different muscle groups, so that while one body part is working, the other recovers, allowing you to keep the intensity level high and lift the heaviest weight possible with good form to stimulate the maximum amount of muscle growth.</p>
        <h3>2. Workout structure</h3>
        <p>All four weekly sessions comprise six exercises divided into three supersets, labelled 1A and 1B, 2A and 2B, and 3A and 3B. In a superset you pair two exercises and perform them back to back, only resting after doing all the reps of the second move. Once all the sets and reps of the first superset are completed, you move on to the second superset and so on.</p>
        <p>This approach is fantastic for building muscle faster because supersets maximise both the intensity and the quality of your sets. And the harder you can push your muscles in the gym, the more damage gets done to muscle tissue, which is then rebuilt bigger and stronger when you recover.</p>
        <h3>3. Workout variables</h3>
        <p>The only way to keep making fast progress when you’re aiming to add lean muscle mass is to follow a progressive training plan that keeps challenging your body in new ways each week. That’s the key to keeping your muscles out of their comfort zone and working as hard as possible so your body has no choice but to keep building back your damaged muscle fibres bigger and stronger.</p>
        <p>At the top of each exercise breakdown for the first week are details about each move, including sets, rest, tempo and rest (for weeks two, three and four this information is listed in tables). Tempo 2010 = 2sec to lower, 0sec pause at the bottom, 1sec to lift, 0sec pause at the top.</p>
        <p>It is imperative you stick exactly to these workout variables because this plan has been designed to provide a progressively challenging workout so you can add the maximum amount of muscle tissue in four weeks.</p>
        <p>For example, in week one you’ll do four sets of ten reps per move, which increases to four sets of 12 in week two. In weeks three and four you’ll do five sets of ten and 12 reps respectively, so every week is harder than the previous week. What’s more, in weeks three and four the tempo (the time it takes to do the lifting and lowering for each rep) changes to make the exercises more challenging, so your target muscles experience more time under tension and workload.</p>
      </div>
    </>
  );
};

export default Home;
