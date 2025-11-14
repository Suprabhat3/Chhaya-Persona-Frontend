# Testing Checklist ✅

## Before Running
- [ ] Run `npm install` to update dependencies
- [ ] Ensure all AI API keys are in `.env.local`
- [ ] Delete `node_modules/.cache` if you had previous version

## Homepage Tests
- [ ] Homepage loads without errors
- [ ] Hero section displays correctly
- [ ] "Start Chatting" button works
- [ ] Navbar shows "Try Demo" button
- [ ] No console errors about auth/supabase

## Persona Selection
- [ ] Persona page loads
- [ ] All persona cards display
- [ ] Clicking a persona navigates to chat
- [ ] Persona info is stored in localStorage

## Chat Interface
- [ ] Chat page loads with selected persona
- [ ] Can type messages
- [ ] Send button works
- [ ] AI responds with streaming text
- [ ] Messages display correctly
- [ ] Code blocks render with syntax highlighting
- [ ] Copy button works on messages
- [ ] Like/Dislike buttons work
- [ ] New chat button clears messages
- [ ] Sidebar toggle works
- [ ] Model selector works (can switch AI models)

## Mobile Tests
- [ ] Responsive design works on mobile
- [ ] Mobile sidebar opens/closes
- [ ] Chat input works on mobile
- [ ] Messages display correctly on small screens

## No Auth Features (Should NOT exist)
- [ ] No login/signup buttons
- [ ] No user profile dropdown
- [ ] No chat history sidebar
- [ ] No "sign in" prompts
- [ ] No chat limits
- [ ] No database calls in console

## Success Criteria
✅ App runs without errors
✅ Can chat with any persona
✅ Can switch between AI models
✅ No authentication required
✅ Clean console (no auth errors)
