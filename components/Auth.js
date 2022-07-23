import { Auth, Typography, Button } from "@supabase/ui";
import { supabase } from "../utils/supabase";

const Container = (props) => {
  const { user } = Auth.useUser();
  if (user)
    return (
      <>
        {/* <Typography.Text>Signed in: {user.email}</Typography.Text> */}
        <div className="">
          <p className="">Signed In: {user.email}</p>
        </div>
        <Button block onClick={() => supabase.auth.signOut()}>
          Sign out
        </Button>
      </>
    );
  return props.children;
};

export default function AuthBasic() {
  return (
      <div className="container" style={{width: '50%', display: 'flex', justifyItems: 'center', color: 'black'}} >
    {/* <Auth.UserContextProvider supabaseClient={supabase}> */}
      <Container>
        <Container>
          <Auth supabaseClient={supabase} magicLink  providers={['google', 'facebook', 'github']} />
        </Container>
      </Container>
    {/* </Auth.UserContextProvider> */}
    </div>
  );
}

