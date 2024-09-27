'use client'
export default function ErrorWrapper({error}: {error: Error}) {
  return <div>OOpss ... {error.message}</div>;
}
